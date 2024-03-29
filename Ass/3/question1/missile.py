import globalset as gs
from ship import Ship
from alien import Alien


class Missile(Ship):
    '''Superclass that defines Generic Missile'''

    def __init__(self, pship):
        self.txt = gs.missile
        self.speed = gs.STDSPEED
        self.ck = 0

        self.x = pship.x - 1
        self.y = pship.y

    def collision(self, sess, temp2):
        '''Defines collision status'''

        return isinstance(temp2, Alien)

    def action(self, sess, temp2):
        '''Defines action on collision'''

        sess.score += 1
        temp2.remove(sess)

    def move(self, sess):
        '''Moves the missile as per required'''

        temp = sess.screen[self.x][self.y]

        self.ck += gs.CLOCK_CYCLE
        if(self.ck > 1/self.speed):
            sess.screen[self.x][self.y] = None
            self.x -= 1
            self.ck = 0

        if(self.x < 0):
            return 1

        temp2 = sess.screen[self.x][self.y]
        sess.screen[self.x][self.y] = temp

        if(self.collision(sess, temp2)):
            self.action(sess, temp2)
            return 1

        return 0
