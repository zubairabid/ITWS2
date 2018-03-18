#!/usr/bin/python3
import requests
from bs4 import BeautifulSoup



# for this, all information can be captured from the home page
# Look inside zg_itemWrapper (find all)
# 	Look inside the only other div (find)
# 		Book name: >a-link-normal>p13n-sc-truncated
# 		Author: >a-row a-size-small>a-size-small a-link-child
# 		Rating: >a-icon-row a-spacing-none>a-link-normal.title
#		No.: >a-icon-row a-spacing-none>a-size-small a-link-normal
#		Price: >a-row>a-link-normal a-text-normal>a-size-base a-color-price>p13n-sc-price>currency-INR

# books = soup.find_all('div', {'class':'p13n-asin'})
# for book in books:
# 	
#
#
#
#	price: result in book.find_all('span', {'class':'p13n-sc-price'})

















# replace with iterative
page = requests.get('https://www.amazon.com/best-sellers-books-Amazon/zgbs/books')
soup = BeautifulSoup(page.text, 'html.parser')

div = soup.find_all("div", {"class":"zs_itemImmersion"})
for e1 in div:
	div1 = e1.find_all("div", {"class":"zs_itemWrapper"})
	for e2 in div1:
		div2 = e2.find_all("div", {"class":"a-section a-spacing-none p13n-asin"})

