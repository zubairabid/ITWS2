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

    scope = soup.find_all('div', {'class': 'zg_itemWrapper'})
    for book in scope:
        # base forms
        url = book.a.get('href')
        name = book.a.find('div', {'class': 'p13n-sc-truncate'})
        author = book.find('div', {'class': 'a-row'})
        price = book.find('span', {'class': 'p13n-sc-price'})
        reviewSet = book.find('div', {'class': 'a-icon-row'})

        # derived results
        if(url is not None):
            url = ''.join((base + url).split(' '))
        if(name is not None):
            name = name.text.strip()
        if(author is not None):
            author = author.text.strip()
        if(price is not None):
            price = 'INR ' + price.text.strip()

        if(reviewSet is not None):
            rating = reviewSet.span.text.strip()
            nor = reviewSet.find_all('a')[1].text.strip()
        else:
            rating = None
            nor = None

        # Conversion to no results
        if(url is None):
            url = 'Not available'
        if(name is None):
            name = 'Not available'
        if(nor is None):
            nor = 'Not available'
        if(rating is None):
            rating = 'Not available'
        if(author is None):
            author = 'Not available'
        if(price is None):
            price = 'Not available'

        row = [name, url, author, price, nor, rating]

        with open('output/in_book.csv', 'a') as file:
            writer = csv.writer(file, delimiter=';')
            writer.writerow(row)


base = 'https://www.amazon.in'
urlb = base + '/gp/bestsellers/books/'

if not os.path.exists('output/'):
    os.mkdir('output/')

hdr = ['Name', 'URL', 'Author', 'Price', 'Number of Ratings', 'Average Rating']
with open('output/in_book.csv', 'w') as file:
    writer = csv.writer(file, delimiter=';')
    writer.writerow(hdr)

for i in range(5):
    url = urlb + 'ref=zg_bs_pg_{}?ie=UTF8&pg={}'.format((i + 1), (i + 1))
    pagecrawl(url, base)
