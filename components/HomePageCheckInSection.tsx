import { Button } from "@heroui/button";
import { DateRangePicker } from "@heroui/date-picker";
import { Input } from "@heroui/input";
import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function HomePageCheckInSection() {
  return (
    <div className="flex justify-between gap-5">
      <DateRangePicker className="max-w-xs" label="Stay duration" />
      <Input
        labelPlacement="inside"
        label="Adults"
        type="number"
        placeholder="0"
      />
      <Input
        labelPlacement="inside"
        label="Children"
        type="number"
        placeholder="0"
      />
      <Button size="lg" radius="sm" color="primary">
        <p>Find rooms</p>
      </Button>
    </div>
  );
}
