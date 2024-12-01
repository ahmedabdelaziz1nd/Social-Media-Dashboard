import React, { useState, useEffect } from 'react';
import './Dashboard.css';
function Dashboard() {
  const [showSubTools, setShowSubTools] = useState(false);
  const [showStatsDetails, setShowStatsDetails] = useState(false);
  const [showSpecificAnalysisDetails, setShowSpecificAnalysisDetails] = useState(false);
  const [showGeneralStatsDetails, setShowGeneralStatsDetails] = useState(false);
  const [showMainChartDetails, setShowMainChartDetails] = useState(false); // حالة عرض الدفات الجديدة

  const [dashboardBackground, setDashboardBackground] = useState(
    'linear-gradient(135deg, #84fab0, #8fd3f4)'
  );
  const [bodyBackground, setBodyBackground] = useState(
    'linear-gradient(135deg, #a1c4fd, #c2e9fb)'
  );
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showDataAnalysisDetails, setShowDataAnalysisDetails] = useState(false);
  const [showTaskExamplesDetails, setShowTaskExamplesDetails] = useState(false); // حالة عرض دف أمثلة على المهام

  const handlePlanningToolsClick = () => {
    setShowSubTools(true);
  };

  const handleStatsChartClick = () => {
    setShowStatsDetails(true);
  };

  const handleSpecificAnalysisClick = () => {
    setShowSpecificAnalysisDetails(true);
  };

  const handleGeneralStatsClick = () => {
    setShowGeneralStatsDetails(true);
  };

  const handleMainChartClick = () => {
    setShowMainChartDetails(true); // فتح الدفات الجديدة للرسم البياني الرئيسي
  };
  const handleDataAnalysisClick = () => {
    setShowDataAnalysisDetails(true);
};
const handleTaskExamplesClick = () => {
  setShowTaskExamplesDetails(true); // فتح الدف الخاصة بأمثلة على المهام
};

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const newDashboardColor = `linear-gradient(135deg, rgba(${Math.floor(255 * x)}, ${Math.floor(150 * y)}, 200, 1), rgba(100, ${Math.floor(255 * x)}, ${Math.floor(255 * y)}, 1))`;
    const newBodyColor = `linear-gradient(135deg, rgba(200, ${Math.floor(255 * x)}, ${Math.floor(150 * y)}, 1), rgba(${Math.floor(150 * y)}, 200, ${Math.floor(255 * x)}, 1))`;

    setDashboardBackground(newDashboardColor);
    setBodyBackground(newBodyColor);
  };

  useEffect(() => {
    document.body.style.background = bodyBackground;
  }, [bodyBackground]);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  if (showTaskExamplesDetails) {
    return (
        <div className="sub-tools-page">
            <h2 className="sub-tools-title">أمثلة على المهام</h2>
            <div className="sub-tools-grid">
                <div className="dashboard-item sub-tool" onClick={() => window.open('/مرنة', '_blank')}>قائمة مهام مرنة</div>
                <div className="dashboard-item sub-tool" onClick={() => window.open('/تقويم', '_blank')}>تقويم مهام</div>
                <div className="dashboard-item sub-tool" onClick={() => window.open('/تعليقات', '_blank')}>الرد على التعليقات</div>
                <div className="dashboard-item sub-tool" onClick={() => window.open('/تخطيط', '_blank')}>تخطيط المحتوى</div>
            </div>
            <button onClick={() => setShowTaskExamplesDetails(false)}>رجوع</button>
        </div>
    );
}
  if (showDataAnalysisDetails) {
    return (
      <div className="sub-tools-page">
        <h2 className="sub-tools-title">تحليل البيانات</h2>
        <div className="sub-tools-grid">
          <div className="dashboard-item sub-tool" onMouseEnter={() => handleMouseEnter('data-analysis')} onMouseLeave={handleMouseLeave}>جداول بيانات تفاعلية</div>
          <div className="dashboard-item sub-tool" onMouseEnter={() => handleMouseEnter('data-analysis')} onMouseLeave={handleMouseLeave}>مرشحات</div>
          <div className="dashboard-item sub-tool" onMouseEnter={() => handleMouseEnter('data-analysis')} onMouseLeave={handleMouseLeave}>مقارنة بين الفترات</div>
          <div className="dashboard-item sub-tool" onMouseEnter={() => handleMouseEnter('data-analysis')} onMouseLeave={handleMouseLeave}>تنبؤات بسيطة</div>
        </div>
        <button onClick={() => setShowDataAnalysisDetails(false)}>رجوع</button>
      </div>
    );
}

  if (showSubTools) {
    return (
      <div className="sub-tools-page">
        <h2 className="sub-tools-title">أدوات التخطيط والاستراتيجية</h2>
        <div className="sub-tools-grid">
          <div className="dashboard-item sub-tool">أدوات تحليل البيانات</div>
          <div className="dashboard-item sub-tool">أدوات التخطيط</div>
          <div className="dashboard-item sub-tool">أدوات التنبؤ</div>
          <div className="dashboard-item sub-tool">أدوات التعاون</div>
        </div>
        <button onClick={() => setShowSubTools(false)}>رجوع</button>
      </div>
    );
  }

  if (showStatsDetails) {
    return (
      <div className="sub-tools-page">
        <h2 className="sub-tools-title">تفاصيل الرسومات الإحصائية</h2>
        <div className="sub-tools-grid">
          <div className="dashboard-item sub-tool">رسومات إحصائية تبين عدد المشاهدات</div>
          <div className="dashboard-item sub-tool">رسومات إحصائية تبين نسبة المتابعين</div>
          <div className="dashboard-item sub-tool">رسومات إحصائية تبين عدد المعجبين</div>
          <div className="dashboard-item sub-tool">رسومات بيانية توضح عدد الليكات</div>
        </div>
        <button onClick={() => setShowStatsDetails(false)}>رجوع</button>
      </div>
    );
  }

  if (showSpecificAnalysisDetails) {
    return (
      <div className="sub-tools-page">
        <h2 className="sub-tools-title">تحليلات محددة</h2>
        <div className="sub-tools-grid">
          <div className="dashboard-item sub-tool">معدل التفاعل</div>
          <div className="dashboard-item sub-tool">نسبة التفاعل</div>
          <div className="dashboard-item sub-tool">أفضل الأوقات للنشر</div>
          <div className="dashboard-item sub-tool">أداء المنشورات المختلفة</div>
        </div>
        <button onClick={() => setShowSpecificAnalysisDetails(false)}>رجوع</button>
      </div>
    );
  }

  if (showGeneralStatsDetails) {
    return (
      <div className="sub-tools-page">
        <h2 className="sub-tools-title">الإحصائيات العامة</h2>
        <div className="sub-tools-grid">
          <div className="dashboard-item sub-tool">الوصول والمشاركة</div>
          <div className="dashboard-item sub-tool">الأداء حسب المنصة</div>
          <div className="dashboard-item sub-tool">الأداء حسب المحتوى</div>
          <div className="dashboard-item sub-tool">أداء تحليل الجمهور</div>
        </div>
        <button onClick={() => setShowGeneralStatsDetails(false)}>رجوع</button>
      </div>
    );
  }

  if (showMainChartDetails) {
    return (
      <div className="sub-tools-page">
        <h2 className="sub-tools-title">الرسم البياني الرئيسي</h2>
        <div className="sub-tools-grid">
          <div className="dashboard-item sub-tool">الوصول والمشاركة</div>
          <div className="dashboard-item sub-tool">الأداء حسب المنصة</div>
          <div className="dashboard-item sub-tool">الأداء حسب المحتوى</div>
          <div className="dashboard-item sub-tool">أداء تحليل الجمهور</div>
        </div>
        <button onClick={() => setShowMainChartDetails(false)}>رجوع</button>
      </div>
    );
  }

  return (
    <div className="dashboard" style={{ background: dashboardBackground }} onMouseMove={handleMouseMove}>
      <div className="dashboard-item stats-chart" onClick={handleStatsChartClick} onMouseEnter={() => handleMouseEnter('stats-chart')} onMouseLeave={handleMouseLeave}>
        رسومات إحصائية
      </div>
      <div className="dashboard-item planning-tools" onClick={handlePlanningToolsClick} onMouseEnter={() => handleMouseEnter('planning-tools')} onMouseLeave={handleMouseLeave}>
        أدوات التخطيط والاستراتيجية
      </div>
      <div className="dashboard-item specific-analysis" onClick={handleSpecificAnalysisClick} onMouseEnter={() => handleMouseEnter('specific-analysis')} onMouseLeave={handleMouseLeave}>
        تحليلات محددة
      </div>
      <div className="dashboard-item general-stats" onClick={handleGeneralStatsClick} onMouseEnter={() => handleMouseEnter('general-stats')} onMouseLeave={handleMouseLeave}>
        الإحصائيات العامة
      </div>
      <div className="dashboard-item data-analysis" onClick={handleDataAnalysisClick} onMouseEnter={() => handleMouseEnter('data-analysis')} onMouseLeave={handleMouseLeave}>
       تحليل البيانات
    </div>

      <div className="dashboard-item main-chart" onClick={handleMainChartClick} onMouseEnter={() => handleMouseEnter('main-chart')} onMouseLeave={handleMouseLeave}>
        الرسم البياني الرئيسي
      </div>
      <div className="dashboard-item task-examples" onClick={handleTaskExamplesClick}>
    أمثلة على المهام
</div>

    </div>
  );
}

export default Dashboard;
