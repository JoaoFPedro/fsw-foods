"use client";
import { notFound, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { searchRestaurants } from "./_actions/search";
import { Restaurant } from "@prisma/client";
import Header from "../_components/Header";
import RestaurantsItem from "../_components/restaurants-item";
import Restaurants from "./_components/restaurants";

const RestaurantsPage = () => {

  return (
    <Suspense>
    <Restaurants />
    </Suspense>
  );
};
export default RestaurantsPage;
