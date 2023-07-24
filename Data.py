import pandas as pd

dfgi = pd.read_csv('C:/Ye_Dong/ToyProject_SuHyun-YeJin/Data/부산관광공사_음식테마거리 음식점 기본정보_20220928.csv', encoding='CP949')
dfun = pd.read_csv('C:/Ye_Dong/ToyProject_SuHyun-YeJin/Data/부산관광공사_음식테마거리 음식점 운영정보_20220928.csv', encoding='CP949')
dfimg = pd.read_csv('C:/Ye_Dong/ToyProject_SuHyun-YeJin/Data/부산관광공사_음식테마거리 음식점 음식이미지정보_20220101.csv', encoding='CP949')

# pd.concat 함수를 사용하여 DataFrame을 합칩니다.
# axis=0이면 수직으로 합치고, axis=1이면 수평으로 합칩니다.
# 여기서는 식당ID를 기준으로 수직으로 합치기 때문에 axis=0으로 설정합니다.
merged_df = pd.concat([dfgi, dfun, dfimg], axis=0)

# 합쳐진 DataFrame을 확인합니다.
print(merged_df)
