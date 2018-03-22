import globalset as gs

class Alien:

    def __init__(self, x, y):
        self.txt = 'y'

        self.x = x
        self.y = y

        self.life = gs.ALIEN_LIFE

    def update(self, sess):
        self.life -= gs.CLOCK_CYCLE
        if(self.life <= 0):
            self.remove(sess)


    def remove(self, sess):
        if(self in sess.alist):
            # c = 0
            # for t in sess.alist:
            #     if(self == t):
            #         sess.alist.remove(c)
            #         break
            #     c += 1
            sess.alist.remove(self)

        sess.screen[self.x][self.y] = None
