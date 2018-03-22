from ship import Ship

class Missile(Ship):

    def __init__(self, pship):
        self.txt = 'i'
        self.speed = 1
        self.x = pship.x - 1
        self.y = pship.y

    def move(self):
        self.x -= self.speed
        if(self.x <= 0):
            #delet
        if(screen[int(self.x+1)][int(self.y)] != None || screen[int(self.x)][int(self.y)] != None):
            #do it
