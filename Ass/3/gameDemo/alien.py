class Alien:

    def __init__(self, x, y):
        self.txt = 'y'
        self.x = x
        self.y = y
        self.life = 8

    def update(self, screen):
        self.life -= 0.1
        if(self.life <= 0):
            screen[self.x][self.y] = None
            # delete it
