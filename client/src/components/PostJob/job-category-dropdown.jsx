export default function JobCategoryDropdown() {
  return (
    <div>
      <div>
        <label htmlFor="job-type" className="sr-only">
          Job Category
        </label>
        <select
          id="job-category"
          onInput={function addTag(value) {
            console.log(value.target.value);
          }}
          name="job-category"
          className="block w-full rounded-md border-2 px-3 py-2 text-gray-900 shadow-sm  border-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-[#80e6ff] sm:text-sm sm:leading-6"
        >
          <option>Job Category</option>
          <option>Logistics</option>
          <option>Finance</option>
          <option>Marketing</option>
          <option>IT Services</option>
          <option>Tech</option>
          <option>Science</option>
          <option>Hospitality</option>
          <option>Sales</option>
        </select>
      </div>
    </div>
  );
}
