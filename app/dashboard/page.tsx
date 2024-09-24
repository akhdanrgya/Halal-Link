"use client";

import { title } from "@/components/primitives";
import { supabase } from "@/libs/supabaseClient";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/productCard";

export default function Dashboard() {

  return (
    <div>
      <h1 className={title()}>Dashboard</h1>
      <ProductCard/>
    </div>
  );
}
