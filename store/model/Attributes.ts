
type ID = number | null
type numeric = number | null
export interface MakeItem {
    id: ID,
    name: string,
}

export interface ModelItem {
  id: ID,
  "make_id" : ID, 
  name: string,
}


export interface TrimItem {
  id: ID,
  "make_id" : ID, 
  year: numeric,
  name: string,
  description: string, 
  msrp: numeric,
  invoice: numeric,
}

export interface TrimUniqItem {
  id: ID,
  "make_model_id" : ID, 
  year: numeric,
  name: string,
  description: string, 
  msrp: numeric,
  invoice: numeric,
  "make_model_trim_interior_colors": ColorItem[],
  "make_model_trim_exterior_colors": ColorItem[],
  "make_model_trim_mileage" : MileageItem,
  "make_model_trim_engine": EngineItem,
  "make_model_trim_body": BodyItem,
  "make_model": {
    model: ModelItem
    make: MakeItem
  }
}

export interface BodyItem {
  id: ID,
  "make_model_trim_id": ID,
  type: string,
  doors: numeric,
  length: string,
  width: string,
  seats: numeric,
  height: string,
  "wheel_base": string,
  "front_track": string,
  "rear_track": string,
  "ground_clearance": string,
  "cargo_capacity": string,
  "max_cargo_capacity": null,
  "curb_weight": numeric,
  "gross_weight": numeric,
  "max_payload": numeric,
  "max_towing_capacity": numeric
}

export interface EngineItem {
  id: ID,
  "make_model_trim_id": ID,
  "engine_type": string,
  "fuel_type": string,
  cylinders: string,
  size: string,
  "horsepower_hp": numeric,
  "horsepower_rpm": numeric,
  "torque_ft_lbs": numeric,
  "torque_rpm": numeric,
  valves: numeric,
  "valve_timing": string,
  "cam_type": string,
  "drive_type": string,
  transmission: string
} 

export interface ColorItem {
  id: ID,
  "make_model_trim_id": ID,
  name: string,
  rgb: string
}

export interface MileageItem {
  id: ID,
  "make_model_trim_id": ID,
  "fuel_tank_capacity": string,
  "combined_mpg": numeric,
  "epa_city_mpg": numeric,
  "epa_highway_mpg": numeric,
  "range_city": numeric,
  "range_highway": numeric
}