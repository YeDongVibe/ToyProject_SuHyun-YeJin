import csv

file_path = 'C:/Ye_Dong/ToyProject_SuHyun-YeJin/sujung/음식점_운영정보.csv'

# CSV 파일을 읽어서 내용을 출력합니다.
with open(file_path, 'r') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print(row)
