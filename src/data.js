const data = [
  {
    header: 'Appetizers',
    list: [
      {code: 'A1', name: 'Crispy Spring Rolls', price: 495},
      {code: 'A2', name: 'Veggie Crispy Spring Rolls', price: 495},
      {code: 'A3', name: 'Shrimp Chips', price: 395},
      {code: 'A4', name: 'Crispy Fried Wontons', price: 495},
      {code: 'A5', name: 'Fresh Salad Rolls', price: 495, desc: 'Rice paper rolls served with fine vermicelli noodles, lettuce, cucumber, and served with sweet home-made sauce. Rolled with one of the options below. If you prefer a fish sauce as dip, let us know.', subOptions: ['A. Shrimp & Pork', 'B. Grilled Beef', 'C. Grilled Chicken', 'D. Vegetables']},
      {code: 'A6', name: 'Marianted Minced Pork', price: 595},
      {code: 'A8', name: 'Golden Shrimp', price: 995},
      {code: 'A9A', name: 'Appetizer Platter A', price: 1795, desc: 'Cripsy Spring Rolls (4), Spring & Pork Salad Rolls (4), Fried Wontons (8), Shrimp Chips (8)'},
      {code: 'A9B', name: 'Appetizer platter B', price: 2295, desc: 'Cripsy Spring Rolls (3), Spring & Pork Salad Rolls (3), Fried Wontons (6), Shrimp Chips (6)'}
    ]
  },
  {
    header: 'Soups',
    desc: 'These are appetizer soups, there are no noodles. All soup bases are bone bone based. We do not have vegetarian broth.',
    list: [
      {code: 'A10', name: 'Vegetable soup', price: 595},
      {code: 'A11S', name: 'Wonton (shrimp & pork filling) Soup - Small', price: 695},
      {code: 'A11L', name: 'Wonton (shrimp & pork filling) Soup - Large', price: 695},
      {code: 'A12A', name: 'Tom Yum Soup - Chicken', price: 695},
      {code: 'A12B', name: 'Tom Yum Soup - Vegetables', price: 595},
      {code: 'A12C', name: 'Tom Yum Soup - Seafood', price: 795},
      {code: 'A12D', name: 'Tom Yum Soup - Beef', price: 695},
    ]
  },
  {
    header: 'Salads',
    desc: 'Julienned mangoes, cucumber, carrots and bell peppers, topped with mint, fish sauce and peanuts.',
    list: [
      {code: 'G1', name: 'Mango Salad', price: 745},
      {code: 'G2', name: 'Shrimp Mango Salad', price: 995}
    ]
  }
];

export default data