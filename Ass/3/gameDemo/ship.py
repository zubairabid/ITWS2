class Ship:

    def __init__(self, x, y):
        self.txt = 'W'
        self.x = x
        self.y = y

    def move(self, direction, screen):

        temp = screen[self.x][self.y]
        screen[self.x][self.y] = None

        if(direction == 'left'):
            if(self.y != 0):
                self.y -= 1
        elif(direction == 'right'):
            if(self.y != 7):
                self.y += 1

        screen[self.x][self.y] = temp

        return self.x, self.y