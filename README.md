# Project Setup (I choose Elite Stays to be the page name)

## Creating a React App using Vite

```sh
npm create vite
```

## Installing Tailwind CSS

```sh
npm install tailwindcss @tailwindcss/vite
```

---

# Components Structure

- **SearchForm** (Destination input, date pickers, guests, room type, search button)
- **Results** (Displays search results)
- **Main** (The parent component of SearchForm and Results in which we fetch the data)
- **Header**

---

# Implementing the Search Form

- All form fields are handled using React controlled inputs.

---

# Fetching Data from Makcorps API

- Data is fetched using the Fetch API inside an event handler function instead of `useEffect` to prevent multiple requests and race conditions.
- **Hotel images** are no longer available in Makcorps API.
- **Filtering by room type** is no longer available but I left its input in the form.

## Getting the City ID

1. Make a request to:

   ```sh
   https://api.makcorps.com/mapping?api_key=${API_KEY}&name=${name}
   ```

   - This returns an array of objects, including hotels and the city.
   - If `type` is **HOTEL**, the `document_id` corresponds to the **Hotel ID**.
   - If `type` is **GEO**, the `document_id` corresponds to the **City ID**.

2. Extract the city object:

   ```js
   const city = data.find((ele) => ele.type === "GEO");
   ```

3. Get the city ID:
   ```js
   const cityId = city.document_id;
   ```

## Fetching Hotels

Once we have the city ID, fetch the hotels using:

```sh
https://api.makcorps.com/city?cityid=${cityId}&cur=USD&adults=${filters.adults}&children=${filters.children}&rooms=1&pagination=0&checkin=${filters.checkIn}&checkout=${filters.checkOut}&api_key=${API_KEY}
```

This API call returns all hotels that match the obtained filters.
