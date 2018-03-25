import globalset as gs


class Ship:
    '''Defines a ship'''

    def __init__(self, x, y):

        self.txt = gs.ship
        self.x = x
        self.y = y

    def move(self, dir, sess):
        '''Defines ship movement'''

        temp = sess.screen[self.x][self.y]
        sess.screen[self.x][self.y] = None

        if(dir == 'left'):
            if(self.y != 0):
                self.y -= 1
        if(dir == 'right'):
            if(self.y != 7):
                self.y += 1

        sess.screen[self.x][self.y] = temp
        return self.x, self.y
