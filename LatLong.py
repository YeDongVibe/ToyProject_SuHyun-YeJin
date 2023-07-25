import pandas as pd

df_ori = pd.read_csv('C:/K-Digital3/ToyProject_SuHyun-YeJin/latlong/totalData 처리.csv', encoding='CP949')
df_latlong = pd.read_csv('C:/K-Digital3/ToyProject_SuHyun-YeJin/latlong/위경도 추가.csv', encoding='CP949')

merge_inner = pd.merge(df_ori, df_latlong, how='outer', on='식당(ID)')
# print(merge_inner)

merge_inner.to_csv('latlong/Data_latlong.csv', index=False, encoding='CP949')

print('병합된 파일이 성공적으로 저장되었습니다.')