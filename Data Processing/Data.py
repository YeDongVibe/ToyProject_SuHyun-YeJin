import pandas as pd

df_gi = pd.read_csv('C:/K-Digital3/ToyProject_SuHyun-YeJin/sujung/음식점_기본정보.csv', encoding='CP949')
df_un = pd.read_csv('C:/K-Digital3/ToyProject_SuHyun-YeJin/sujung/음식점_운영정보.csv', encoding='CP949')
df_img = pd.read_csv('C:/K-Digital3/ToyProject_SuHyun-YeJin/sujung/음식점_음식이미지정보.csv', encoding='CP949')

merge_inner = pd.merge(df_gi, df_un, how='outer', on='식당(ID)')
merge_inner = pd.merge(merge_inner, df_img, how='outer', on='식당(ID)')
# print(merge_inner)

merge_inner.to_csv('totalData.csv', index=False, encoding='CP949')

print('병합된 파일이 성공적으로 저장되었습니다.')