// Tiny event bus so any component can open the reservation drawer.
export const ENQUIRY_EVENT = "dar-hadia:open-enquiry";

export type EnquiryPrefill = {
  roomId?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
};

export function openEnquiry(prefill?: EnquiryPrefill) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<EnquiryPrefill>(ENQUIRY_EVENT, { detail: prefill ?? {} }));
}
