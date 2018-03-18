import requests
from bs4 import BeautifulSoup

for i in range(5):
	page = requests.get(('https://www.amazon.in/gp/bestsellers/books/ref=zg_bs_pg_' + str(i+1) + '?ie=UTF8&pg=' + str(i+1)))
	soup = BeautifulSoup(page.text, 'html.parser')

	books = soup.find_all('div', {'class':'zg_itemWrapper'})
	for book in books:
		name = book.a.find('div', {'class':'p13n-sc-truncate'})
		if (name != None):
			name = name.string

		rating =  book.find('span', {'class':'a-icon-alt'})
		if (rating != None):
			rating = rating.string

		price = book.find_all('span', {'class':'p13n-sc-price'})[0]
		if (price != None):
			price = price.text

		author = book.find('div', {'class':'a-row'})
		if (author != None):
			author = author.string

		t = book.find_all('a', {'class':'a-size-small'})
		if(len(t) == 0):
			nratings = None
			rating = None
		else:
			nratings = t[len(t)-1].string

		# remove commas from nratings first
		if(nratings != None):
			nratings = ''.join(nratings.split(','))

		#
		try:
			int(nratings.strip())
		except:
			nratings = None
			rating = None

		if(name == None):
			name = "Not available"

		if(nratings == None):
			nratings = "Not available"

		if(rating == None):
			rating = "Not available"

		if(author == None):
			author = "Not available"

		if(price == None):
			price = "Not available"

		print("PAGE: " + str(i+1))
		print("Name:" + name.strip())
		print("Author:" + author.strip())
		print("Number of Ratings:" + nratings.strip())
		print("Rating:" + rating.strip())
		print("Price:" + price.strip())
		print('\n'*2)
