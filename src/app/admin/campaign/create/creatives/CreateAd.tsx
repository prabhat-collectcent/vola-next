'use client';

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useCampaign } from "../context/CampaignContext";
import { useToast } from "@/components/toast/ToastProvider";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { uploadCreativesAction } from "@/actions/campaign.actions";

type Props = {
  adGroupResourceName: string;
  campaignId?: string;
};

type FormDataType = {
  final_url: string;
  business_name: string;
  long_headline: string;
  headline: string;
  description: string;
  marketing_images: FileList | [];
  square_marketing_images: FileList | [];
};

export default function UploadCreatives() {

  const searchParams = useSearchParams();
  const { showToast } = useToast();
  const router = useRouter();


  const campaignId = decodeURIComponent(searchParams.get('id') || '');
  console.log("campaignId", campaignId)

  if (!campaignId) {
    showToast('Something went wrong!', 'error');

  }

  const [formData, setFormData] = useState<FormDataType>({
    final_url: "",
    business_name: "",
    long_headline: "",
    headline: "",
    description: "",
    marketing_images: [],
    square_marketing_images: [],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {

    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("handle file change called");
    const { name, files, dataset } = e.target;
    const max = parseInt(dataset.max || "15");

    if (files && files.length > max) {
      alert(`You can upload a maximum of ${max} images.`);
      e.target.value = "";
      return;
    }
    console.log("files", files)

    setFormData({ ...formData, [name]: files || [] });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    data.append("campaign_id", campaignId);
    data.append("final_url", formData.final_url);
    data.append("business_name", formData.business_name);
    data.append("long_headline", formData.long_headline);
    data.append("headlines[]", formData.headline);
    data.append("descriptions[]", formData.description);

    Array.from(formData.marketing_images || []).forEach((file) => data.append("marketing_images[]", file));

    Array.from(formData.square_marketing_images || []).forEach((file) => data.append("square_marketing_images[]", file));


    console.log("form data", formData, data.getAll('final_url'));

    try {
      //@ts-ignore
      const apiResponse: any = await uploadCreativesAction(data);
      console.log("response object")
      console.log(apiResponse);


      if (apiResponse?.success) {
        showToast('Creatives uploaded successfully', 'success');
        router.push(`/admin/campaign`);
      } else {
        // @ts-ignore
        showToast(apiResponse?.message || 'Something went wrong', 'error');
      }

    } catch (error) {
      // @ts-ignore
      console.log("api error response", error);
      showToast((error as Error)?.message || 'Something went wrong', 'error');
    }
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
            placeholder="Company Name"
            required
            className="w-full h-[41px] text-xs bg-white rounded-[13px] px-3 border border-[#79747EA8] focus:border-[#4144E6]"
          />
        </div>

        {/* Ad Copy */}
        <div className="bg-white border border-neutral-100 rounded-2xl p-6">
          <div className="text-sm font-medium mb-4">Ad Copy</div>

          <div className="text-[13px] mb-2 text-[#1E1E1E]">Text which will be used to match different ad placements *</div>
          <input
            type="text"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            placeholder="Headline"
            className="w-full h-[41px] text-xs bg-white rounded-[13px] px-3 border border-[#79747EA8] mb-3"
          />


          <div className="text-[13px] mb-2 text-[#1E1E1E]">Long text which will be used to match different ad placements *</div>
          <input
            type="text"
            name="long_headline"
            value={formData.long_headline}
            onChange={handleChange}
            placeholder="Long Headline"
            required
            className="w-full h-[41px] text-xs bg-white rounded-[13px] px-3 border border-[#79747EA8] mb-4"
          />

          <div className="text-[13px] mb-2 text-[#1E1E1E]">Description for mixing and matching these assets based on the specific available slot</div>
          <input
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
            placeholder={`Description`}
            className="w-full h-[41px] text-xs bg-white rounded-[13px] px-3 border border-[#79747EA8] mb-3"
          />
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
                Recommended size: 1200 × 628 px (Maximum 15 images allowed)
              </div>
            </div>

            <div>
              <div className="text-[13px] mb-2 text-[#1E1E1E]">
                Square Marketing Images *
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
                Recommended size: 1200 × 1200 px (Maximum 15 images allowed)
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