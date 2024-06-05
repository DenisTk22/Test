# переменные:
last_id = 0
all_data = []
file_base = "file.txt"
import tabulate

# Получение данных:
# def get_value():
#     return (input('Введите Имя:'))

# Вывод данных:
def view_data(data):
    print(data) 

def show_all():
    if all_data: #если в all_data что-то есть (true), то выводи, если нет (false), то else
        print(*all_data, sep="\n")
    else:
        print("Empty data")

# Получение данных:
# def get_value():
#     return (input('Введите Имя:'))

def add_new_contact(): #сделать через список, Добавить проверку не существует ли такой же записи (if else) и проверка 
    global last_id 
    array = ["Surname", "Name", "Patronymic", "Phone_number"]
    string = ""
    for i in array:
        string += input(f"Enter {i} please: ") + " "
    last_id += 1
    all_data.append(string)
    print(tabulate([string], headers=[array], tablefmt='orgtbl'))



    # with open(file_base, "a", encoding="utf-8") as f:
    #     f.write(f"{last_id} {string}\n")

add_new_contact()

show_all()