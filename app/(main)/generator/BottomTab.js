import { useEffect, useState } from 'react';
import { BottomTabs, TabOption } from './styles';

const BottomTabsComponent = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeTab, setActiveTab] = useState('Slide Script Generator');

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Render only on the client side

  const tabs = ['Slide Script Generator', 'Code Diagram Generator', 'Audio'];

  return (
    <BottomTabs>
      {tabs.map((tab) => (
        <TabOption
          key={tab}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </TabOption>
      ))}
    </BottomTabs>
  );
};

export default BottomTabsComponent;
