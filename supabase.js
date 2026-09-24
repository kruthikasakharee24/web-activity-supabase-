import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://viupodxcjxfwcdhgmvru.supabase.co";
const supabaseKey = "sb_publishable_oCeb_ztu2Y3wwm1hnBaQSA_bwZsTLb3";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
