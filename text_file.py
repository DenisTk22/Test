#
'''
a - открытие для добавления данных, создание файла
r - открытие для чтения данных
w - открытие для записи данных, создание файла
w+ - открывает файл для записи и читать из него, создание файла
r+ - открывает файл для чтения и дописывать в него
'''
# colors = ['111', '888', 'blue']
# data = open ('file.txt', 'a') # a - создаст файл
# data.writelines(colors)
# data.close()

with open('file.txt', 'w') as data:
    data.write('id' + '   name: \n')
    for i in range(3):
        
        data.write(f'{i} ' + f'   home{i+2}\n')


print('finish')

# path = 'file.txt'
# data = open(path, 'r')
# for line in data:
#     print(line)
# data.close()
