'use client';

import React, { useState, ChangeEvent, FormEvent, useMemo } from "react";
import { useToast } from "@/components/toast/ToastProvider";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { uploadCreativesAction } from "@/actions/campaign.actions";
import { PerformanceCreativeSchema } from "@/lib/validations/create-ad.valiadation";

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});


  const [perfFormData, setPerfFormData] = useState({
    adName: '',
    headline: '',
    primaryText: '',
    callToAction: 'Book Now',
    appName: '',
    category: '',
    adTags: '',
    marketing_images: [],
    square_marketing_images: [],
  });


  function handlePerformanceChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setPerfFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));

  }

  const handlePerfFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("handle file change called");
    const { name, files, dataset } = e.target;
    const max = parseInt(dataset.max || "15");

    if (files && files.length > max) {
      alert(`You can upload a maximum of ${max} images.`);
      e.target.value = "";
      return;
    }
    console.log("files", files)

    setPerfFormData({ ...perfFormData, [name]: files || [] });
  };

  // function handleImageUpload(
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   type: 'main' | 'logo'
  // ) {
  //   const file = e.target.files?.[0];

  //   if (!file) return;

  //   const imageUrl = URL.createObjectURL(file);

  //   if (type === 'main') {
  //     setMainImage(imageUrl);
  //   } else {
  //     setLogoImage(imageUrl);
  //   }
  // }

  const handlePerformanceSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = PerformanceCreativeSchema.safeParse({
      headline: perfFormData.headline,
      primaryText: perfFormData.primaryText,
    });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((err) => {
        const key = String(err.path[0]);
        fieldErrors[key] = err.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    console.log("performance data", perfFormData, campaignId)

    const perfData = new FormData();

    perfData.append("campaign_id", campaignId);
    if (perfFormData.adName) perfData.append("ad_name", perfFormData.adName);
    perfData.append("headlines[]", perfFormData.headline);
    perfData.append("descriptions[]", perfFormData.primaryText);
    perfData.append("call_to_action", perfFormData.callToAction);
    perfData.append("app_name", perfFormData.appName);
    perfData.append("category", perfFormData.category);
    perfData.append("ad_tag", perfFormData.adTags);

    Array.from(perfFormData.marketing_images || []).forEach((file) => perfData.append("marketing_images[]", file));
    Array.from(perfFormData.square_marketing_images || []).forEach((file) => perfData.append("square_marketing_images[]", file));

    try {
      //@ts-ignore
      const apiResponse: any = await uploadCreativesAction(perfData);
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
    } finally {
      setIsSubmitting(false);
    }
  };

  // Display State
  const searchParams = useSearchParams();
  const { showToast } = useToast();
  const router = useRouter();


  const campaignId = decodeURIComponent(searchParams.get('id') || '');
  const campaignType = decodeURIComponent(searchParams.get('type') || '');
  console.log("campaignId and type", campaignId, campaignType);

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

    setIsSubmitting(true);


    const data = new FormData();

    data.append("campaign_id", campaignId);
    if (formData.final_url) data.append("final_url", formData.final_url);
    data.append("business_name", formData.business_name);
    data.append("long_headline", formData.long_headline);
    data.append("headlines[]", formData.headline);
    data.append("descriptions[]", formData.description);

    Array.from(formData.marketing_images || []).forEach((file) => data.append("marketing_images[]", file));
    Array.from(formData.square_marketing_images || []).forEach((file) => data.append("square_marketing_images[]", file));


    console.log("form data", formData);

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
    } finally {
      setIsSubmitting(false);
    }
  };

  if (campaignType == "DISPLAY") {
    return (
      <div className="max-w-[900px] mx-auto w-full p-6">
        <h2 className="text-lg font-medium mb-6">Upload Creatives</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Destination */}
          <div className="bg-white border border-neutral-100 rounded-2xl p-6">
            <div className="text-[13px] mb-2 text-[#1E1E1E]">Final URL {campaignType === "DISPLAY" && "*"}</div>

            <input
              type="text"
              name="final_url"
              value={formData.final_url}
              onChange={handleChange}
              placeholder="https://example.com"
              required={campaignType === "DISPLAY"}
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
                  Recommended size: 600 × 314 px (Maximum 15 images allowed)
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
                  Recommended size: 300 × 300 px (Maximum 15 images allowed)
                </div>
              </div>

            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-[#4144E6] text-white rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Uploading...' : 'Upload Creatives'}
            </button>

          </div>

        </form>
      </div>
    );

  } else if (campaignType == "PERFORMANCE") {
    return (
      <div className="w-full bg-white rounded-2xl border border-neutral-200 p-8">

        <form onSubmit={handlePerformanceSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-[1fr_360px] gap-12">

            {/* LEFT SIDE */}
            <div className="flex flex-col gap-6">

              {/* Ad Name */}
              <div>
                <label className="block text-[13px] text-[#1E1E1E] mb-2">
                  Ad Name
                </label>

                <input
                  type="text"
                  name="adName"
                  value={perfFormData.adName}
                  onChange={handlePerformanceChange}
                  className="w-full h-[42px] border border-neutral-300 rounded-xl px-4 text-sm"
                />
              </div>

              {/* Creative Type 
          <div>
            <div className="text-[13px] text-[#1E1E1E] mb-3">
              Creative
            </div>

            <div className="flex flex-wrap gap-5">

              {[
                {
                  label: 'Horizontal Video',
                  value: 'horizontal_video',
                },
                {
                  label: 'Vertical Video',
                  value: 'vertical_video',
                },
                {
                  label: 'Horizontal Image',
                  value: 'horizontal_image',
                },
                {
                  label: 'Vertical Image',
                  value: 'vertical_image',
                },
              ].map((item) => (
                <label
                  key={item.value}
                  className="flex items-center gap-2 text-sm text-neutral-600 cursor-pointer"
                >
                  <input
                    type="radio"
                    checked={creativeType === item.value}
                    onChange={() =>
                      setCreativeType(item.value as CreativeType)
                    }
                  />

                  {item.label}
                </label>
              ))}
            </div>
          </div> */}

              {/* Main Image */}
              <div>
                <div className="text-[12px] text-[#1E1E1E] mb-1">
                  Image
                </div>

                <label className="w-[90px] h-[90px] border border-dashed border-[#4144E6] rounded-xl overflow-hidden flex items-center justify-center cursor-pointer hover:bg-[#F8F9FF] transition-all">

                  {perfFormData.marketing_images.length > 0 ? (
                    <img
                      src={URL.createObjectURL(perfFormData.marketing_images[0])}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) :
                    (
                      <div className="text-xs text-[#4144E6] text-center px-2">
                        Upload Image
                      </div>
                    )}

                  <input
                    type="file"
                    name="marketing_images"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePerfFileChange}
                  />
                </label>

                <div className="text-[10px] text-neutral-400 mt-1">
                  Format: .jpg .jpeg .png .webp
                </div>
              </div>

              {/* Logo */}
              <div>
                <div className="text-[12px] text-[#1E1E1E] mb-1">
                  Logo
                </div>

                <label className="w-[90px] h-[90px] border border-dashed border-[#4144E6] rounded-xl overflow-hidden flex items-center justify-center cursor-pointer hover:bg-[#F8F9FF] transition-all">

                  {perfFormData.square_marketing_images.length > 0 ? (
                    <img
                      src={URL.createObjectURL(perfFormData.square_marketing_images[0])}
                      alt=""
                      className="w-full h-full object-contain bg-white"
                    />
                  ) : (
                    <div className="text-xs text-[#4144E6] text-center px-2">
                      Upload Logo
                    </div>
                  )}

                  <input
                    type="file"
                    name="square_marketing_images"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePerfFileChange}
                  />
                </label>

                <div className="text-[10px] text-neutral-400 mt-1">
                  Format: .jpg .jpeg .png .webp
                </div>
              </div>

              {/* Headline */}
              <div>
                <label className="block text-[13px] mb-2">
                  Headline
                </label>

                <input
                  type="text"
                  name="headline"
                  value={perfFormData.headline}
                  onChange={handlePerformanceChange}
                  className={`w-full h-[42px] border rounded-xl px-4 text-sm ${errors.headline ? "border-red-500" : "border-neutral-300"
                    }`}
                />
                {errors.headline && (
                  <span className="block mt-1 text-[12px] text-red-500">
                    {errors.headline}
                  </span>
                )}
              </div>

              {/* Primary Text */}
              <div>
                <label className="block text-[13px] mb-2">
                  Primary Text
                </label>

                <input
                  type="text"
                  name="primaryText"
                  value={perfFormData.primaryText}
                  onChange={handlePerformanceChange}
                  className={`w-full h-[42px] border rounded-xl px-4 text-sm ${errors.primaryText ? "border-red-500" : "border-neutral-300"
                    }`}
                />

                {errors.primaryText && (
                  <span className="block mt-1 text-[12px] text-red-500">
                    {errors.primaryText}
                  </span>
                )}

              </div>

              {/* CTA Language */}
              {/* <div>
            <label className="block text-[13px] mb-2">
              Call To Action Language
            </label>

            <select
              name="ctaLanguage"
              value={perfFormData.ctaLanguage}
              onChange={handlePerformanceChange}
              className="w-full h-[42px] border border-neutral-300 rounded-xl px-4 text-sm bg-white"
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div> */}

              {/* CTA */}
              <div>
                <label className="block text-[13px] mb-2">
                  Call To Action
                </label>

                <select
                  name="callToAction"
                  value={perfFormData.callToAction}
                  onChange={handlePerformanceChange}
                  className="w-full h-[42px] border border-neutral-300 rounded-xl px-4 text-sm bg-white"
                >
                  <option>Book Now</option>
                  <option>Install</option>
                  <option>Learn More</option>
                  <option>Download</option>
                  <option>Shop</option>
                  <option>Sign Up</option>
                  <option>Watch</option>
                  <option>Join</option>
                  <option>Order Now</option>
                  <option>Subscribe</option>
                  <option> Book Now</option>
                  <option> Play Now</option>



                </select>
              </div>

              {/* App Name */}
              <div>
                <label className="block text-[13px] mb-2">
                  App Name
                </label>

                <input
                  type="text"
                  name="appName"
                  value={perfFormData.appName}
                  onChange={handlePerformanceChange}
                  className="w-full h-[42px] border border-neutral-300 rounded-xl px-4 text-sm"
                />
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-neutral-200">
                <div className="text-lg font-medium mb-6">
                  Tags
                </div>

                <div className="grid grid-cols-2 gap-5">

                  <div>
                    <label className="block text-[13px] mb-2">
                      Category
                    </label>

                    <select
                      name="category"
                      value={perfFormData.category}
                      onChange={handlePerformanceChange}
                      className="w-full h-[42px] border border-neutral-300 rounded-xl px-4 text-sm bg-white"
                    >
                      <option>
                        Tourism / Travel agency
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] mb-2">
                      Ad Tags
                    </label>

                    <input
                      type="text"
                      name="adTags"
                      value={perfFormData.adTags}
                      onChange={handlePerformanceChange}
                      className="w-full h-[42px] border border-neutral-300 rounded-xl px-4 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* PHONE PREVIEW */}
            <div className="flex justify-center">

              <div className="w-[300px] h-[620px] rounded-[40px] border-[10px] border-black bg-white overflow-hidden shadow-2xl relative">

                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[24px] rounded-full bg-black z-10" />

                {/* Screen */}
                <div className="w-full h-full pt-12 bg-[#F5F5F5] overflow-hidden">

                  {/* Browser */}
                  <div className="px-4 pt-4">
                    <div className="h-[34px] rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[10px] text-neutral-400">
                      publisher.com
                    </div>
                  </div>

                  {/* Ad Card */}
                  <div className="mt-6 bg-white mx-3 rounded-2xl overflow-hidden border border-neutral-200">

                    {/* Header */}
                    <div className="p-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">

                        {perfFormData.square_marketing_images.length > 0 ? (
                          <img
                            src={URL.createObjectURL(perfFormData.square_marketing_images[0])}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : null}
                      </div>

                      <div className="flex-1">

                        <div className="flex items-center justify-between gap-2">

                          <div className="text-xs font-medium truncate">
                            {perfFormData.headline}
                          </div>

                          <div className="text-[10px] text-neutral-400 flex-shrink-0">
                            Ads
                          </div>

                        </div>

                        <div className="text-[10px] text-neutral-400">
                          {perfFormData.primaryText}
                        </div>

                      </div>

                    </div>

                    {/* Main Image */}
                    <div
                      className={`w-full bg-neutral-100 overflow-hidden aspect-[16/9]`}
                    >
                      {perfFormData.marketing_images.length > 0 ? (
                        <img
                          src={URL.createObjectURL(perfFormData.marketing_images[0])}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-neutral-400">
                          Preview Image
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-3">
                      <div className="text-sm font-semibold mb-1">
                        {/* {perfFormData.headline} */}
                      </div>

                      {/* <div className="text-xs text-neutral-500 leading-5 mb-4">
                        {perfFormData.primaryText}
                      </div> */}

                      <button className="w-full h-[38px] rounded-xl bg-[#1677FF] text-white text-sm font-medium">
                        {perfFormData.callToAction}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="
    h-[44px]
    px-6
    rounded-xl
    bg-[#4144E6]
    text-white
    text-sm
    font-medium
    hover:bg-[#3538D4]
    transition-all
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
            >
              {isSubmitting ? 'Saving...' : 'Save Creative'}
            </button>
          </div>
        </form>


      </div>
    );

  }
}



