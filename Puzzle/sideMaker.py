x = "0% 100%, 6% 93%, 13% 87%, 16% 79%, 17% 73%, 17% 65%, 14% 61%, 9% 64%, 8% 67%, 5% 70%, 1% 64%, 2% 53%, 2% 45%, 6% 39%, 10% 43%, 14% 46%, 15% 40%, 14% 32%, 10% 25%, 4% 21%, 0% 17%, 0% 0%"
x= x.replace("%","")
x = x.split(", ")
output = []
for point in x:
    temp = point.split(" ")
    output.append([int(temp[0]), int(temp[1])])
print output
out = []
for point in reversed(x):
    temp = point.split(" ")
    out.append([int(temp[0])+100,int(temp[1])])
print out
