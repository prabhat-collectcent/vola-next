'use client';

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useCampaign } from "../context/CampaignContext";
import { useToast } from "@/components/toast/ToastProvider";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  adGroupResourceName: string;
  campaignId?: string;
};

type FormDataType = {
  final_url: string;
  business_name: string;
  long_headline: string;
  headlines: string[];
  descriptions: string[];
  marketing_images: FileList | [];
  square_marketing_images: FileList | [];
};

export default function UploadCreatives() {

  const searchParams = useSearchParams();
  const { showToast } = useToast();
    const router = useRouter();
  

  const adGroup = decodeURIComponent(searchParams.get('adGroup') || '');
  console.log("adGroup", adGroup)

  // if (!adGroup) {
  //   showToast('Something went wrong!', 'error');

  // }

  const [formData, setFormData] = useState<FormDataType>({
    final_url: "",
    business_name: "",
    long_headline: "",
    headlines: [""],
    descriptions: [""],
    marketing_images: [],
    square_marketing_images: [],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index?: number,
    type?: "headlines" | "descriptions"
  ) => {
    if (type === "headlines" || type === "descriptions") {
      const arr = [...formData[type]];
      arr[index!] = e.target.value;
      setFormData({ ...formData, [type]: arr });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files, dataset } = e.target;
    const max = parseInt(dataset.max || "15");

    if (files && files.length > max) {
      alert(`You can upload a maximum of ${max} images.`);
      e.target.value = "";
      return;
    }

    setFormData({ ...formData, [name]: files || [] });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    router.push(`/admin/campaign`)


    const data = new FormData();

    // @ts-ignore
    data.append("adGroupResourceName", adGroupResourceName);
    // @ts-ignore
    data.append("campaign_id", campaignId || "");
    data.append("final_url", formData.final_url);
    data.append("business_name", formData.business_name);
    data.append("long_headline", formData.long_headline);

    formData.headlines.forEach((h) => data.append("headlines[]", h));
    formData.descriptions.forEach((d) => data.append("descriptions[]", d));

    Array.from(formData.marketing_images || []).forEach((file) =>
      data.append("marketing_images[]", file)
    );

    Array.from(formData.square_marketing_images || []).forEach((file) =>
      data.append("square_marketing_images[]", file)
    );


    console.log("form data", formData, data.getAll('final_url'))
    // await fetch("/google-ads/creatives/upload", {
    //   method: "POST",
    //   body: data,
    // });
  };

  return (
    <div className="max-w-[900px] mx-auto w-full p-6">
      <h2 className="text-lg font-medium mb-6">Upload Creatives</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Destination */}
        <div className="bg-white border border-neutral-100 rounded-2xl p-6">
          <div className="text-[13px] mb-2 text-[#1E1E1E]">Final URL *</div>

          <input
            type="text"
            name="final_url"
            value={formData.final_url}
            onChange={handleChange}
            placeholder="https://example.com"
            required
            className="w-full h-[41px] text-xs bg-white rounded-[13px] px-3 border border-[#79747EA8] focus:border-[#4144E6]"
          />
        </div>

        {/* Business Info */}
        <div className="bg-white border border-neutral-100 rounded-2xl p-6">
          <div className="text-[13px] mb-2 text-[#1E1E1E]">Business Name *</div>

          <input
            type="text"
            name="business_name"
            value={formData.business_name}
            onChange={handleChange}
            placeholder="Interplanetary Travel Inc"
            required
            className="w-full h-[41px] text-xs bg-white rounded-[13px] px-3 border border-[#79747EA8] focus:border-[#4144E6]"
          />
        </div>

        {/* Ad Copy */}
        <div className="bg-white border border-neutral-100 rounded-2xl p-6">
          <div className="text-sm font-medium mb-4">Ad Copy</div>

          <div className="text-[13px] mb-2 text-[#1E1E1E]">Headlines</div>
          {formData.headlines.map((h, i) => (
            <input
              key={i}
              type="text"
              value={h}
              onChange={(e) => handleChange(e, i, "headlines")}
              placeholder={`Headline ${i + 1}`}
              className="w-full h-[41px] text-xs bg-white rounded-[13px] px-3 border border-[#79747EA8] mb-3"
            />
          ))}

          <div className="text-[13px] mb-2 text-[#1E1E1E]">Long Headline *</div>
          <input
            type="text"
            name="long_headline"
            value={formData.long_headline}
            onChange={handleChange}
            required
            className="w-full h-[41px] text-xs bg-white rounded-[13px] px-3 border border-[#79747EA8] mb-4"
          />

          <div className="text-[13px] mb-2 text-[#1E1E1E]">Descriptions</div>
          {formData.descriptions.map((d, i) => (
            <input
              key={i}
              type="text"
              value={d}
              onChange={(e) => handleChange(e, i, "descriptions")}
              placeholder={`Description ${i + 1}`}
              className="w-full h-[41px] text-xs bg-white rounded-[13px] px-3 border border-[#79747EA8] mb-3"
            />
          ))}
        </div>

        {/* Creative Assets */}
        <div className="bg-white border border-neutral-100 rounded-2xl p-6">
          <div className="text-sm font-medium mb-4">Creative Assets</div>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <div className="text-[13px] mb-2 text-[#1E1E1E]">
                Marketing Images *
              </div>

              <input
                type="file"
                name="marketing_images"
                multiple
                data-max="15"
                onChange={handleFileChange}
                className="w-full border border-dashed border-[#4144E6] rounded-lg p-3 text-sm cursor-pointer"
              />

              <div className="text-xs text-gray-500 mt-1">
                Recommended: 1200 × 628
              </div>
            </div>

            <div>
              <div className="text-[13px] mb-2 text-[#1E1E1E]">
                Square Images *
              </div>

              <input
                type="file"
                name="square_marketing_images"
                multiple
                data-max="15"
                onChange={handleFileChange}
                className="w-full border border-dashed border-[#4144E6] rounded-lg p-3 text-sm cursor-pointer"
              />

              <div className="text-xs text-gray-500 mt-1">
                Recommended: 1200 × 1200
              </div>
            </div>

          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-[#4144E6] text-white rounded-lg text-sm"
          >
            Upload Creatives
          </button>
        </div>

      </form>
    </div>
  );
}