import globalset as gs


class Alien:

    def __init__(self, x, y):
        '''Creates an alien object'''

        self.txt = gs.alien

        self.x = x
        self.y = y

        self.life = gs.ALIEN_LIFE

    def update(self, sess):
        '''Keeps track of alien life time, and deletes when exceeds'''

        self.life -= gs.CLOCK_CYCLE
        if(self.life <= 0):
            self.remove(sess)

    def remove(self, sess):
        '''deleter function for the alien'''

        if(self in sess.alist):
            sess.alist.remove(self)

        sess.screen[self.x][self.y] = None
