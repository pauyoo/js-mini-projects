import requests
from bs4 import BeautifulSoup

url = "https://books.toscrape.com/"
response = requests.get(url)

soup = BeautifulSoup(response.text, "html.parser")

books = soup.find_all("h3")

for book in books:
    print(book.text)

import pandas as pd

data = []

for item in soup.select(".product_pod"):
    title = item.h3.a["title"]
    price = item.select_one(".price_color").text
    
    data.append([title, price])

df = pd.DataFrame(data, columns=["Title", "Price"])
df.to_csv("books.csv", index=False)