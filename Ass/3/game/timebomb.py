from missile import Missile
import globalset as gs


class Timebomb(Missile):
    '''Defines the Timershot Missile'''

    def __init__(self, pship):
        super().__init__(pship)

        self.txt = gs.timeb
        self.speed = gs.BSPEED

    def action(self, sess, temp2):
        '''Modified action on using this missile'''

        temp2.life += gs.EXTENSION
        temp2.txt = gs.alien_shot
        sess.screen[self.x][self.y] = temp2
        return 1
