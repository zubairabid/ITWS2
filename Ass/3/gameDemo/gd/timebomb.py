from missile import Missile

class Timebomb(Missile):

    def __init__(self, pship):
        super().__init__(pship)

        self.txt = 'l'
        self.speed = 2

    def action(self, sess, temp2):
        temp2.life += 5
        temp2.txt = 'v'
        sess.screen[self.x][self.y] = temp2
        return 1
