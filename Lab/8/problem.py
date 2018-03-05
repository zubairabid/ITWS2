#!/usr/bin/python3

import random

class Coin:
	def __init__(self, coin_number):
		self.number = coin_number;
	number = 0;
	owners = [] # stores hashes of person

class People():
	__name__ = ""	

	def __init__(self, name):
		self.__name__ = name
		self.hsh = hash((self.__name__ + str(random.random())))
		self.p_coins = {}

	def spend(self, coin, receiver):
		creator.Transaction(self, coin, receiver);
	
	def Transaction(self, coin, receiver):
		if(len(coins[coin.number].owners) == 0):
			# allow
			coins[coin.number].owners.append(self.hsh)
			self.p_coins[str(coin.number)] = False
			receiver.p_coins[str(coin.number)] = True
		else:
			if(coins[coin.number].owners[len(owners)-1] == self.hsh):
				coins[coin.number].owners.append(self)
				# allow
			else:
				# disallow
				print("You can't spend someone else's coin")
				

class Goofy(People):	
	def __init__(self):
		People.__init__(self, "Goofy")

	def Add_Coin(self):
		coin = Coin((len(coins)+1));
		coins.append(coin);
		
	# Transaction should be 	
		
coins = [];
creator = Goofy()

# print("Debug inititialiser")
# print(creator)

p1 = People("name1")
p2 = People("name2")
p2 = People("name3")
p3 = People("name4")
p4 = People("name5")

creator.Add_Coin()
creator.Add_Coin()
creator.Add_Coin()
creator.Add_Coin()
creator.Add_Coin()

p1.Transaction(coins[1], p3)
for temp in p3.p_coins:
	print(temp.number, end=' ')


print(p1.hsh)
print(p2.hsh)
print(p1.hsh == p2.hsh)
