"use client";

import { title } from "@/components/primitives";
import { supabase } from "@/libs/supabaseClient";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/productCard";

export default function Dashboard() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Dashboard</h1>
        </div>

        <ProductCard />
        
      </div>
    </section>
  );
}
