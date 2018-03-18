#following test cases should be tried independently
# from P.Q.M.Foo import foo
# foo()

#import P.Q.M.Foo
#P.Q.M.Foo.foo()

#import P.Q.M.Foo as MyFoo
#MyFoo.foo()

#from P.Q.M import Foo
#Foo.foo()

# Error: do not work
# from P.Q import M
# M.Foo.foo() #Foo is imported
#
# from P import Q
# Q.M.Foo.foo() #M,Foo are imported
#
# import P
# P.Q.M.Foo.foo() #Q,M,Foo are imported
