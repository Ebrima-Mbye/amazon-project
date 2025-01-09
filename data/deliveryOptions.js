import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { isWeekend } from "../scripts/date.js";
export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    priceCents: 0,
  },
  {
    id: "2",
    deliveryDays: 3,
    priceCents: 499,
  },
  {
    id: "3",
    deliveryDays: 1,
    priceCents: 999,
  },
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}

export function calculateDeliveryDate(deliveryOption) {
  let deliveryDate = dayjs();
  let { deliveryDays } = deliveryOption;

  let counter = 0;

  // Loop until we have counted the required delivery days
  while (counter < deliveryDays) {
    deliveryDate = deliveryDate.add(1, "days");

    // Increment counter only if the day is not a weekend
    if (!isWeekend(deliveryDate)) {
      counter++;
    }
  }

  // Format the delivery date to a readable string
  const dateString = deliveryDate.format("dddd, MMMM D");

  return dateString;
}
