from missile import Missile
import globalset as gs


class Ballistic(Missile):
    '''Inherited Ballistic Missile properties'''

    def __init__(self, pship):
        super().__init__(pship)
