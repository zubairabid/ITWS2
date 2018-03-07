#!/usr/bin/python3
import random

class Coins:
	"Stores a representation of a single coin, with attributes number and owner_chain"

	def __init__(self):
		self.number = (len(coins) + 1)
		self.owner_chain = [] # stores the hash of the person

	def printo(self):
		print("Ownership chain: ")
		for i in self.owner_chain:
			print(i, end = ", ")
		print()

class People:
	"Represents a person. Instances of People are used for a lot of shit."

	def __init__(self, name):
		"Initializes the name of the People instance and assigns a (hopefully unique) hash"	
		self.name = name
		self.sno = (len(peeps)+1)
		self.hsh = hash((self.name + str(self.sno)))
		# self.wallet = {} # We do not need to store the coins owned by a particular person
		print("Person " + self.name + " added. Serial number: " + str(self.sno) + ". Hash: " + str(self.hsh))

class Goofy(People):
	"A specific person - Goofy - who manages the system"

	def __init__(self):
		"Sets an instance of People specified to be Goofy"
		p = People("Goofy")
		p.__init__(name="Goofy")

	def Add_Coin(self):
		coin = Coins()
		coins.append(coin) # a new coin is added to the list of coins
		

	def Transaction(self, coin, sen, rec): # sen is sender, rec is receiver, both People instances. coin is a Coins instance
		if(len(coin.owner_chain) == 0):
			coin.owner_chain.append(rec.hsh)
			return

		if(not coin.owner_chain[(len(coin.owner_chain)-1)] == sen.hsh):
			print("Person " + sen.name + " does not own the coin, transaction is not possible")
			return

		coin.owner_chain.append(rec.hsh)

# global list of coins in circulation
coins = []

#list of people
peeps = []

# interface for the program
goofy = Goofy()

while(True):
	op = int(input("1. Make a new coin\n2. Add a new person\n3. Pay someone\n4. Print owner chains of all coins\n"))

	if(op == 1):
		goofy.Add_Coin()
		print("New coin added!")
	
	elif (op == 2) :
		name = input("Enter name of person:")	
		p = People(name)
		peeps.append(p)

	elif(op == 3):
		s_serial = int(input("Enter serial number of person paying"))
		r_serial = int(input("Enter serial number of person to be paid"))
	
		coin = int(input("Enter (serial) number of coin to give"))

		goofy.Transaction(coins[coin-1], peeps[s_serial-1], peeps[r_serial-1])
		coins[coin-1].printo()

	elif(op == 4):
		for i in coins:
			i.printo()	
		
	else:
		pass
