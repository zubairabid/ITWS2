#!/usr/bin/python3
import requests
from bs4 import BeautifulSoup

f = open('workfile', 'a')

page = requests.get('http://indianexpress.com/?s=iiit')
soup = BeautifulSoup(page.text, 'html.parser')

#for link in soup.find_all('a'):
#	print(link.get('href'))

detDiv = soup.find_all("div", {"class":"details"})
for div in detDiv:
	dat = div.find('h3')
	if(dat != None):
		for elem in dat:
			link = elem['href']
			title = elem['title']

			print("*"*50)
			print(link)
			print("TITLE: " + str(title) + "\n" + "*"*50 + "\n")
			
			# FILES
			f.write("*"*50 + "\n")
			f.write(link + "\n")
			f.write("TITLE: " + str(title) + "\n" + "*"*50 + "\n")


			sub = requests.get(link)
			subsoup = BeautifulSoup(sub.text, 'html.parser')
			articles = subsoup.find_all("div", {"class":"articles"})
			
			for art in articles:
				ps = art.find_all('p')
				for para1 in ps:
					print(para1.text)
					print()

					#FILES
					f.write(para1.text + "\n\n")
			print("\n\n")	

			# FILES
			f.write("\n\n")
