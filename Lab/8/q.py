#!/usr/bin/python3
import random

class Coins:
	"Stores a representation of a single coin, with attributes number and owner_chain"

	def __init__(self, number):
		self.number = number
		self.owner_chain = []


class People:
	"Represents a person. Instances of People are used for a lot of shit."

	def __init__(self, name):
		"Initializes the name of the People instance and assigns a (hopefully unique) hash"	
		self.name = name
		self.hsh = hash((self.name + str(random.random())))
		self.wallet = {}
	

class Goofy(People):
	"A specific person - Goofy - who manages the system"

	def __init__(self):
		"Sets an instance of People specified to be Goofy"
		People.__init__("Goofy")

	def Add_Coin(self):
		coin = Coins(len(coins)+1)
		coins.append(coin) # a new coin is added to the list of coins
		
		pass

	def Transaction(self, coin_no, rec):
		pass

coins = []

while(True):
	op = int(input("1. Make a new coin\n2. Pay someone\n"))

	if(op == 1):
		pass
	
	elif(op == 2):
		
		pass

	else:
		pass
