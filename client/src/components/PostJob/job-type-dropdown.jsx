export default function JobTypeDropdown() {
  return (
    <div>
      <div>
        <label htmlFor="job-type" className="sr-only">
          Job Type
        </label>
        <select
          id="country"
          name="country"
          autoComplete="country-name"
          className="block w-full rounded-md border-2 px-3 py-2 text-gray-900 shadow-sm  border-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
        >
          <option>Job Type</option>
          <option>On-Site</option>
          <option>Remote</option>
          <option>Hybrid</option>
        </select>
      </div>
    </div>
  );
}
