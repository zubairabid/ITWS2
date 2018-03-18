import package_init as pkg

print 'inside test code'
pkg.P.Foo.foo()
pkg.Q.Foo.foo()
pkg.M.Foo.foo()

from package_init import *
P.Foo.foo()
Q.Foo.foo()
M.Foo.foo()






