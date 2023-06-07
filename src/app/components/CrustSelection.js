const CrustSelection = ({crust, setCrust}) => {
  return <div className="flex justify-center items-center lg:justify-start">
    <div className="flex gap-x-12 mb-8 font-medium">
      <label className="flex items-center gap-x-2 cursor-pointer">
        <input className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary checked:border-secondary cursor-pointer" type="radio" name="crust" value="klassik" checked={crust === 'klassik'} onChange={(e) => setCrust(e.target.value)} />
        Klassik
      </label>
      <label className="flex items-center gap-x-2 cursor-pointer">
        <input className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary checked:border-secondary cursor-pointer" type="radio" name="crust" value="nazik" checked={crust === 'nazik'} onChange={(e) => setCrust(e.target.value)} />
        Nazik
      </label>
    </div>
  </div>;
};

export default CrustSelection;
