/*
    Assignment 05
*/

class ContentItem {
    constructor(id, name, description, categoryGenre) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.categoryGenre = categoryGenre;
    }
  
    updateContentItem(id, name, description, categoryGenre) {
      if (id === this.id) {
        if (name !== null) this.name = name;
        if (description !== null) this.description = description;
        if (categoryGenre !== null) this.categoryGenre = categoryGenre;
      }
    }
  
    toString() {
      return `
        <div class="content-item-wrapper" id="content-item-${this.id}">
          <h2>${this.name}</h2>
          <p>${this.description}</p>
          <div>${this.categoryGenre}</div>
        </div>
      `;
    }
  }
  
  const contentItems = [
    new ContentItem(0, 'Spider Man', 'A super hero movie', 'Si-fi'),
    new ContentItem(1, 'Inception', 'A mind bending time travel movie', 'Si-fi'),
    new ContentItem(2, 'Jurassic Park', 'Dinosaurs on loose', 'Advanture'),
    new ContentItem(3, 'Man of Steel', 'Staring of iconic Superman', 'Action'),
    new ContentItem(4, 'The Shawshank Redemption', 'A tale of hope and redemption', 'Drama'),
  ];
  
 
  
  contentItems.forEach((item) => {
    $('#content-item-list').append(item.toString());

    const contentItemWrapper = $(`#content-item-${item.id}`);
    contentItemWrapper.css({
      border: '1px solid #000',
      width: '300px',
      padding: '10px',
      margin: '20px auto',
    });
  });
  

  $('#successful-update').on('click', function () {
    // Update a ContentItem successfully
    contentItems[0].updateContentItem(0, 'Ant Man', 'new super hero', 'Si-fi');
    $(`#content-item-0`).html(contentItems[0].toString());
  });
  
  $('#unsuccessful-update').on('click', function () {
    contentItems[1].updateContentItem(2, 'In Time', 'Time Travel Movie', 'Si-Fi');
  });
  

