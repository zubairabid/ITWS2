egrep "TS((-.{2}-((..55)|(..SS)|(.555)|(.SSS))-(0|O))|( .{2} ((..55)|(..SS)|(.555)|(.SSS)) (0|O)))" "$1"
# TS is matched first. Then it's either - or blank. Now get .{2}, now get ..SS or ..55 or .SSS or .555, then match 0 or O
