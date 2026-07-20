// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

import { root } from "@lynx-js/react";
import { books } from "./book.js";
import { type Book } from "./book.js";
import { ProductCard } from "./ProductCard.jsx";

const ListContainer = () => {
  let data: Book[] = [];
  for (let i = 0; i < 5; i++) {
    data = books.concat(books);
  }
  return (
    <list
      scroll-orientation="vertical"
      list-type="single"
      span-count={1}
      style={{
        width: "100%",
        height: "100vh",
        listMainAxisGap: "5px",
        padding: "10px",
      }}
      preload-buffer-count={10} // add buffer
      experimental-max-fling-distance-ratio="auto" // adjust fling distance
    >
      {data.map((book: Book, index) => {
        return (
          <list-item
            item-key={`list-item-${index}`}
            key={`list-item-${index}`}
            estimated-main-axis-size-px={122} // add estimated size
          >
            <ProductCard book={book} index={index} />
          </list-item>
        );
      })}
    </list>
  );
};

root.render(<ListContainer />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
