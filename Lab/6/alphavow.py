str = input()
nstr = str.lower()
print(nstr)
vowl = []
vowellist = "aeiou"
for character in nstr:
	if(character in vowellist):
		vowl.append(character);

print(vowl);
