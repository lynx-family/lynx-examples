import { root, useEffect, useState } from "@lynx-js/react";
import type { PerformanceEntry } from "@lynx-js/types";
import { useLynxPerformanceObserver } from "../common/utils.jsx";
import "./index.scss";

let has_reload = false;
export default function ReloadBundleEntryExample(this: any) {
  const [reloadBundleEntry, setReloadBundleEntry] = useState<string>("");

  // 1. Create a performance observer.
  let callback = (entry: PerformanceEntry) => {
    let entryId = entry.entryType + entry.name;
    console.log(entryId);
    if (
      entry.entryType == "pipeline"
      && (entry.name == "reloadBundleFromNative" || entry.name == "reloadBundleFromBts")
    ) {
      // 3. Received "pipeline.reloadBundleFromBts" event.
      setReloadBundleEntry(JSON.stringify(entry, null, 2));
    }
  };
  // 2. Register to listen to the "pipeline" event.
  useLynxPerformanceObserver(["pipeline"], callback);

  useEffect(() => {
    if (!has_reload) {
      setTimeout(() => {
        has_reload = true;
        // 3. reload from bts
        lynx.reload({ "test": "123" }, () => {});
      }, 2000);
    } else {
      has_reload = true;
    }
  }, []);

  return (
    <view className="container">
      <text className="title">Hello ReloadBundleEntry~</text>
      <text className="entry">{reloadBundleEntry}</text>
    </view>
  );
}

root.render(<ReloadBundleEntryExample />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
