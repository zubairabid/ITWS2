import requests
from bs4 import BeautifulSoup
import csv
import os

# base = base url for each book
def pagecrawl(url, base):
    page = requests.get(url)
    soup = BeautifulSoup(page.text, 'html.parser')

    if(page.status_code == 404):
        return

    scope = soup.find_all('div', {'class':'zg_itemWrapper'})
    for book in scope:
        # base forms
        url = book.a.get('href')
        name = book.a.find('div', {'class':'p13n-sc-truncate'})
        author = book.find('div', {'class':'a-row'})
        price = book.find('span', {'class':'p13n-sc-price'})
        reviewSet = book.find('div', {'class':'a-icon-row'})

        # derived results
        if(url != None):
            url = ''.join((base + url).split(' '))
        if(name != None):
            name = name.text.strip()
        if(author != None):
            author = author.text.strip()
        if(price != None):
            price = price.text.strip()

        if(reviewSet != None):
            rating = reviewSet.span.text.strip()
            nor = ''.join(reviewSet.find_all('a')[1].text.strip().split(','))
        else:
            rating = None
            nor = None

        # Conversion to no results
        if(url == None):
            url = "Not available"
        if(name == None):
            name = "Not available"
        if(nor == None):
            nor = "Not available"
        if(rating == None):
            rating = "Not available"
        if(author == None):
            author = "Not available"
        if(price == None):
            price = "Not available"

        row = [name, url, author, price, nor, rating]

        with open('output/com_book.csv', 'a') as file:
            writer = csv.writer(file, delimiter=';')
            writer.writerow(row)


base = 'https://www.amazon.com'
urlb = base + '/best-sellers-books-Amazon/zgbs/books/'

if not os.path.exists('output/'):
    os.mkdir('output/')

hdr = ['Name', 'URL', 'Author', 'Price', 'Number of Ratings', 'Average Rating']
with open('output/com_book.csv', 'w') as file:
    writer = csv.writer(file, delimiter=';')
    writer.writerow(hdr)

for i in range(5):
    url = urlb + 'ref=zg_bs_pg_{}?_encoding=UTF8&pg={}'.format((i + 1), (i + 1))
    pagecrawl(url, base)
