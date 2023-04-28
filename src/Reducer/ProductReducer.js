import { categoryList, ratingList } from "../Data/Data";

export const INITIAL_STATE = {
  data: [],
  updatedData: [],
  appliedFilter: [],
  filterWithCategory: [],
  filterWithRatingList: [],
  searchQuery: "",
  checkboxList: [
    {
      cId: 1,
      label: "american",
      apply: false,
    },
    {
      cId: 2,
      label: "chinese",
      apply: false,
    },
    {
      cId: 3,
      label: "italian",
      apply: false,
    },
  ],
};

export const reducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "HANDLE_SAVE_DATA": {
      return {
        ...state,
        data:
          state.data.length > 0
            ? [...state.data, ...payload]
            : [...state.data, ...payload],
        updatedData:
          state.updatedData.length > 0
            ? [...state.updatedData, ...payload]
            : [...state.updatedData, ...payload],
        filterWithRatingList: [...state.filterWithRatingList, ...ratingList],
        filterWithCategory: [...state.filterWithCategory, ...categoryList],
      };
    }
    case "HANDLE_SEARCH_FILTER": {
      return {
        ...state,
        searchQuery: payload,
      };
    }
    case "HANDLE_CHECKED_CHECKBOX": {
      return {
        ...state,
        checkboxList: state.checkboxList.map((eachCheckbox) =>
          eachCheckbox.cId === payload.cId
            ? { ...eachCheckbox, apply: !eachCheckbox.apply }
            : { ...eachCheckbox }
        ),
      };
    }
    case "HANDLE_FILTER_WITH_CUISINE_DATA": {
      const appliedFilterCuisineName = state.checkboxList.reduce(
        (acc, cur) => (cur.apply === true ? [...acc, cur.label] : [...acc]),
        []
      );

      const filtedDataAccToCategory = state.data.filter((eachCategory) =>
        state.appliedFilter.includes(eachCategory.category)
      );

      const filterDataWithCuisine = filtedDataAccToCategory.filter(
        (eachProduct) => appliedFilterCuisineName.includes(eachProduct.cuisine)
      );

      return {
        ...state,
        updatedData:
          filterDataWithCuisine.length > 0
            ? filterDataWithCuisine
            : filtedDataAccToCategory,
      };
    }
    case "ACTIVE_CATEGORY_BUTTON": {
      return {
        ...state,
        filterWithCategory: state.filterWithCategory.map((eachCategory) =>
          eachCategory.cId === payload.cId
            ? { ...eachCategory, active: true }
            : { ...eachCategory, active: false }
        ),
      };
    }
    case "FILTER_WITH_CATEGORY": {
      const filterCategoryListName = state.filterWithCategory.reduce(
        (acc, cur) => (cur.active === true ? [...acc, cur.value] : [...acc]),
        []
      );

      const filterDataWithCategory = state.data.filter((eachProduct) =>
        filterCategoryListName.includes(eachProduct.category)
      );

      return {
        ...state,
        updatedData:
          filterDataWithCategory.length > 0
            ? filterDataWithCategory
            : state.data,
        appliedFilter: filterCategoryListName,
      };
    }
    case "ACTIVE_CATEGORY_RATING_BUTTON": {
      return {
        ...state,
        filterWithRatingList: state.filterWithRatingList.map((eachCategory) =>
          eachCategory.rId === payload.rId
            ? { ...eachCategory, active: true }
            : { ...eachCategory, active: false }
        ),
      };
    }
    case "FILTER_WITH_START_RATING": {
      const filterWithRatingNumberList = state.filterWithRatingList.reduce(
        (acc, cur) => (cur.active === true ? [...acc, cur.value] : [...acc]),
        []
      );

      const filtedDataAccToCategory = state.data.filter((eachCategory) =>
        state.appliedFilter.includes(eachCategory.category)
      );

      const filterDataWithRating = filtedDataAccToCategory.filter(
        (eachProduct) =>
          filterWithRatingNumberList.includes("" + eachProduct.rating)
      );
      console.log("🚀 ~ file: ProductReducer.js:137 ~ reducerFunc ~ filterDataWithRating:", filterDataWithRating)

      return {
        ...state,
        updatedData:
          filterDataWithRating.length !== 0
            ? filterDataWithRating
            : filtedDataAccToCategory,
      };
    }
    case "HANDLE_PRICE_FILTER": {
      const { minPrice, currentPrice } = payload;
      const filtedDataAccToCategory = state.data.filter((eachCategory) =>
        state.appliedFilter.includes(eachCategory.category)
      );
      return {
        ...state,
        updatedData: filtedDataAccToCategory.filter(
          (eachProduct) =>
            eachProduct.price <= currentPrice && eachProduct.price >= minPrice
        ),
      };
    }
  }
};
