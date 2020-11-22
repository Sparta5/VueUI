nums = {1, 2, 3, 4, 4, 3, 2, 1}
print(nums)
print(type(nums))

nums = {1, 2, 3, 4, 4, 3, 2, 1}
print(nums)
print(type(nums))

# 用途: 把数组去重
names = ['lucy', 'mike', 'lucy', 'jack', 'mary', 'jack']
# 去重
# set(): 转化类型为 set 集合类型; 只负责去重 不保障原顺序
uni_names = set(names)
print(uni_names)