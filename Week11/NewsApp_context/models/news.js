
class News {
  constructor(
    id,
    category,
    headline,
    date,
    author,
    agency,
    description,
    imageUrl
  ) {
    this.id = id;
    this.category = category;
    this.headline = headline;
    this.date = date;
    this.author = author;
    this.agency = agency;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.headline} - Date: ${this.date} - Author: ${this.author} - Agency: ${this.agency} - Category: ${this.category} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
  }
}

export default News;
